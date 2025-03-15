window.onload = function() {
    let commentDiv = document.createElement("div");
    commentDiv.className = "comments-container";
    commentDiv.innerHTML = `
        <script src="https://giscus.app/client.js"
            data-repo="bonjunku/bonjunku.github.io"
            data-repo-id="R_kgDOOI1TmQ"
            data-category="General"
            data-category-id="DIC_kwDOOI1Tmc4CoC-f"
            data-mapping="pathname"
            data-strict="0"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="bottom"
            data-theme="preferred_color_scheme"
            data-lang="ko"
            data-loading="lazy"
            crossorigin="anonymous"
            async>
        </script>
    `;
    document.body.appendChild(commentDiv);
};
