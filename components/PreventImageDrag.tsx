"use client";

import { useEffect } from "react";

export default function PreventImageDrag() {
  useEffect(() => {
    // Prevent dragging on all images
    const preventDrag = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement || 
          e.target instanceof SVGSVGElement ||
          e.target instanceof HTMLPictureElement) {
        e.preventDefault();
        return false;
      }
    };

    // Prevent context menu on images
    const preventContextMenu = (e: MouseEvent) => {
      if (e.target instanceof HTMLImageElement || 
          e.target instanceof SVGSVGElement ||
          e.target instanceof HTMLPictureElement) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener("dragstart", preventDrag);
    document.addEventListener("drag", preventDrag);
    document.addEventListener("contextmenu", preventContextMenu);

    // Set draggable="false" on all images
    const images = document.querySelectorAll("img, svg, picture");
    images.forEach((img) => {
      if (img instanceof HTMLElement) {
        img.setAttribute("draggable", "false");
      }
    });

    // Hide Next.js logo in bottom left - more aggressive approach
    const hideNextJsLogo = () => {
      // Find ALL elements in the document
      const allElements = document.querySelectorAll("*");
      allElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          const styles = window.getComputedStyle(el);
          const rect = el.getBoundingClientRect();
          const href = el.getAttribute("href");
          const className = el.className || "";
          const id = el.id || "";
          
          // Check multiple conditions
          const isNextJsLink = 
            (el.tagName === "A" || el.tagName === "a") && 
            (href?.includes("nextjs") || 
             href?.includes("vercel") ||
             href?.includes("vercel.com") ||
             href?.includes("nextjs.org"));
          
          const isBottomLeftFixed = 
            styles.position === "fixed" &&
            rect.bottom < 150 &&
            rect.left < 150 &&
            (rect.width < 200 && rect.height < 200);
          
          // Check for Next.js specific classes or IDs
          const hasNextJsIndicator = 
            className.toLowerCase().includes("next") ||
            id.toLowerCase().includes("next") ||
            className.toLowerCase().includes("vercel") ||
            id.toLowerCase().includes("vercel");
          
          // Check if element contains Next.js logo (SVG or image)
          const containsNextJsLogo = 
            el.querySelector('svg[viewBox*="0 0"]') !== null ||
            el.querySelector('img[src*="next"]') !== null ||
            el.querySelector('img[alt*="Next"]') !== null;
          
          if (isNextJsLink || (isBottomLeftFixed && (hasNextJsIndicator || containsNextJsLogo))) {
            el.style.cssText = "display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; position: absolute !important; left: -9999px !important;";
            el.setAttribute("hidden", "true");
          }
        }
      });
    };

    // Run immediately and watch for changes
    hideNextJsLogo();
    const observer = new MutationObserver(hideNextJsLogo);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"]
    });

    // Also check frequently to catch late-loading elements
    const interval = setInterval(hideNextJsLogo, 500);

    // Cleanup
    return () => {
      document.removeEventListener("dragstart", preventDrag);
      document.removeEventListener("drag", preventDrag);
      document.removeEventListener("contextmenu", preventContextMenu);
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return null;
}

