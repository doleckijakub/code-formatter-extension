(async function() {

const content_type = document.contentType;
if (content_type.toLowerCase() != "text/plain") {
	console.info("Code formatter: not a plain text HTTP response, exiting");
	return;
}

const code_element = document.querySelector("pre");
const code = code_element.textContent;

console.info(`Code length: ${code.length}`);

})();
