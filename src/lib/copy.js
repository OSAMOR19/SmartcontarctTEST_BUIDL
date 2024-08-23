/**
 * Copies the provided text to the clipboard.
 * @param {string} text - The text to be copied.
 * @returns {Promise<void>} A promise that resolves when the text is copied successfully.
 */
const copyToClipboard = async (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      // For modern browsers in secure contexts
      await navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
      document.body.removeChild(textArea);
    }
    // console.log('Text copied successfully');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};

export default copyToClipboard;
