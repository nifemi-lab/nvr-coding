// NVR Coding — free playground
const TEMPLATES = {
  hello: 'const name = "you";\nconsole.log("Hello, " + name + "!");',
  loop: 'for (let i = 1; i <= 5; i++) {\n  console.log("Count: " + i);\n}',
  math: 'let total = 0;\nfor (let i = 1; i <= 10; i++) total += i;\nconsole.log("Sum 1..10 = " + total);'
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-tpl]').forEach(b => b.onclick = () => {
    document.getElementById('editor').value = TEMPLATES[b.dataset.tpl];
  });
  document.getElementById('runBtn').onclick = () => {
    const out = [];
    try {
      new Function('console', document.getElementById('editor').value)({ log: (...a) => out.push(a.join(' ')) });
      document.getElementById('out').textContent = out.join('\n') || '(no output — use console.log 😉)';
    } catch (e) {
      document.getElementById('out').textContent = '🐛 ' + e.message;
    }
  };
});
