export function hideDocumentScroll(hide: boolean) {
  if (window !== undefined) {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    const html = document.getElementsByTagName("html")[0];

    Object.assign(html.style, {
      marginRight: hide ? `${scrollbarWidth}px` : "unset",
    });

    html.classList[hide ? "add" : "remove"]("scroll-fixed");
  }
}
