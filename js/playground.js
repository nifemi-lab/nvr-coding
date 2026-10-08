// NVR Coding — free playground (with syntax colors)
const TEMPLATES = {
  hello: 'const name = "you";\nconsole.log("Hello, " + name + "!");',
  loop: 'for (let i = 1; i <= 5; i++) {\n  console.log("Count: " + i);\n}',
  math: 'let total = 0;\nfor (let i = 1; i <= 10; i++) total += i;\nconsole.log("Sum 1..10 = " + total);',
  array: 'const nums = [2, 4, 6, 8];\nconst doubled = nums.map(n => n * 2);\nconsole.log(doubled);',
  object: 'const user = { name: "Ada", role: "coder" };\nconsole.log(user.name + " is a " + user.role);',
  fetch: '// fetch example (won\'t run offline, just read it)\nfetch("/api/data")\n  .then(r => r.json())\n  .then(data => console.log(data));'
};

function highlight(code) {
  const esc = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc
    .replace(/(\/\/.*$)/gm, '<span style="color:#64748b">$1</span>')
    .replace(/(".*?"|'.*?')/g, '<span style="color:#fcd34d">$1</span>')
    .replace(/\b(const|let|var|function|return|if|else|for|while|new|=>|true|false|null|undefined|fetch|console|log)\b/g, '<span style="color:#a78bfa">$1</span>')
    .replace(/\b(\d+)\b/g, '<span style="color:#34d399">$1</span>');
}

document.addEventListener('DOMContentLoaded', () => {
  const editor = document.getElementById('editor');
  const preview = document.getElementById('highlight');
  document.querySelectorAll('[data-tpl]').forEach(b => b.onclick = () => {
    editor.value = TEMPLATES[b.dataset.tpl];
    preview.innerHTML = highlight(editor.value);
  });
  editor.addEventListener('input', () => { preview.innerHTML = highlight(editor.value); });
  preview.innerHTML = highlight(editor.value);

  document.getElementById('runBtn').onclick = () => {
    const out = [];
    try {
      new Function('console', editor.value)({ log: (...a) => out.push(a.join(' ')) });
      document.getElementById('out').textContent = out.join('\n') || '(no output — use console.log 😉)';
    } catch (e) {
      document.getElementById('out').textContent = '🐛 ' + e.message;
    }
  };
});
