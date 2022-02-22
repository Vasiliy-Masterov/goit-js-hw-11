export { onButtonLoadMore, offButtonLoadMore };

function onButtonLoadMore(buttonLoadMoreEl) {
   buttonLoadMoreEl.style.visibility = "visible";
   buttonLoadMoreEl.disabled = false; 
}

function offButtonLoadMore(buttonLoadMoreEl) {
  buttonLoadMoreEl.style.visibility = "hidden";
  buttonLoadMoreEl.disabled = true;
}
