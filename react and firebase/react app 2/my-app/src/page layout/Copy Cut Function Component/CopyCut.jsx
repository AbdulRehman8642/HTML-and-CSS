import "./CopyCut.css";

export default function Copy() {

    function copyText() {
        const text = document.getElementById('textareaID')
        text.select()
        document.execCommand('copy')
        const copyBtn = document.getElementById('copyBtn')
        copyBtn.innerText = 'Copied'
        setTimeout(() => {
        copyBtn.innerText = 'Copy'
        }, 1000);
    }

    function cutText() {
        const text = document.getElementById('textareaID')
        text.select()
        document.execCommand('cut')
        const copyBtn = document.getElementById('cutBtn')
        copyBtn.innerText = 'Cut'
        setTimeout(() => {
        copyBtn.innerText = 'Cut'
        }, 1000);
    }


  return (
    <>
      <div className="textParent">
        <textarea
          className="text"
          placeholder="write something"
          id="textareaID"
        ></textarea>
        <button onClick={copyText} id="copyBtn">Copy</button>
        <button onClick={cutText} id="cutBtn">Cut</button>
      </div>
    </>
  );
}
