window.LESSONS = {
  "tracks": [
    {
      "id": "track0",
      "icon": "🌐",
      "title": "Track 0 — How the Web Works",
      "lessons": [
        {
          "id": "t0l1",
          "title": "Client vs Server",
          "steps": [
            { "type": "text", "heading": "The two heroes of the web", "body": "Every website you've ever used involves two characters: the <b>client</b> (your browser — Chrome, Edge, Safari) and the <b>server</b> (a computer somewhere holding the website's files).", "analogy": "The client is the customer at a restaurant. The server is the kitchen." },
            { "type": "text", "heading": "How they talk", "body": "Your browser sends a <b>request</b> ('please give me this page'). The server sends back a <b>response</b> (the HTML, CSS, JS files). This back-and-forth is called HTTP — the language of the web.", "analogy": "It's exactly like a waiter taking your order to the kitchen and bringing back the food." },
            { "type": "quiz", "question": "Who holds the website's files?", "options": ["Your browser (the client)", "The server", "Wi-Fi", "The mouse"], "answer": 1, "explain": "The server stores the site's files and sends them when asked.", "hint": "Think restaurant — who actually has the food?" },
            { "type": "code", "heading": "Say hello in JavaScript", "body": "JavaScript is the language that makes pages interactive. Try logging a message — it's your first line of code.", "starter": "console.log(\"Hello from the client!\");" },
            { "type": "write", "heading": "Your turn — no starter code ✍️", "body": "From memory: write one line that logs <b>Hello, world!</b> to the console. I'll watch and check it for you.", "expected": "Hello, world!", "mustInclude": ["console.log"], "hint": "It looks like: console.log(\"Hello, world!\");" },
            { "type": "quiz", "question": "What does the client (browser) send to the server?", "options": ["A response", "A request", "A pizza", "JavaScript files only"], "answer": 1, "explain": "Browser asks (request), server answers (response).", "hint": "The waiter takes the..." }
          ]
        },
        { "id": "t0l2", "title": "What a URL Really Is", "steps": [
          { "type": "text", "heading": "URLs are just addresses", "body": "A URL like <code>https://example.com/page</code> has parts: the protocol (<b>https</b>), the domain (<b>example.com</b>), and the path (<b>/page</b>). That's it — a street address for the internet.", "analogy": "Protocol = delivery service, domain = the street, path = the house number." },
          { "type": "quiz", "question": "In https://example.com/about, what is “/about”?", "options": ["The protocol", "The domain", "The path", "The password"], "answer": 2, "explain": "The path points to a specific page on that domain.", "hint": "Where on the site?" },
          { "type": "code", "heading": "Practice output", "body": "Log your favorite website's address.", "starter": "console.log(\"https://myfavorite.site\");" }
        ]}
      ]
    },
    {
      "id": "track1",
      "icon": "🎨",
      "title": "Track 1 — Front-End",
      "lessons": [
        { "id": "t1l1", "title": "HTML: The Skeleton", "steps": [
          { "type": "text", "heading": "Structure first", "body": "HTML describes what a page <b>is</b>: headings, paragraphs, buttons. CSS dresses it. JavaScript animates it. Skeleton, skin, muscles.", "analogy": "HTML is the skeleton, CSS the skin/clothes, JS the muscles." },
          { "type": "quiz", "question": "Which language defines the structure of a page?", "options": ["CSS", "HTML", "JavaScript", "SQL"], "answer": 1, "explain": "HTML = the skeleton. CSS = style. JS = behavior.", "hint": "Think: what holds the page up?" },
          { "type": "code", "heading": "Your first output", "body": "Logs work like console messages. Try printing a heading tag as text.", "starter": "console.log(\"<h1>Hi!</h1>\");" },
          { "type": "write", "heading": "Write it yourself ✍️", "body": "No starter code now. Write one line that logs your name. I'm watching! 👀", "expected": "", "mustInclude": ["console.log"], "hint": "console.log(\"Ada\"); — but with YOUR name!" }
        ]},
        { "id": "t1l2", "title": "CSS: Making It Beautiful", "steps": [
          { "type": "text", "heading": "Style = selector + rules", "body": "CSS picks an element with a <b>selector</b> and gives it rules: color, size, spacing. Small rules, applied consistently, create beautiful design.", "analogy": "Selectors are like name tags — you style everyone wearing the same tag." },
          { "type": "quiz", "question": "What does a CSS selector do?", "options": ["Picks which HTML to style", "Creates a database", "Sends emails", "Runs the server"], "answer": 0, "explain": "Selector = which element. Rule = how it looks.", "hint": "It chooses the target." }
        ]},
        { "id": "t1l3", "title": "JavaScript & the DOM", "steps": [
          { "type": "text", "heading": "The page as a tree", "body": "The browser turns your HTML into a tree of objects called the <b>DOM</b>. JavaScript can grab any node and change it — text, colors, even whole sections — instantly.", "analogy": "HTML is the family tree; the DOM lets you rename or move any relative." },
          { "type": "quiz", "question": "What is the DOM?", "options": ["A database", "The page as a tree of objects JS can change", "A CSS framework", "A browser setting"], "answer": 1, "explain": "DOM = your HTML, live and editable from JS.", "hint": "A family tree of elements." },
          { "type": "code", "heading": "Quick practice", "body": "Log the message a button click would show.", "starter": "console.log(\"Button clicked!\");" }
        ]},
        { "id": "t1l4", "title": "Fetching Data (APIs)", "steps": [
          { "type": "text", "heading": "Asking servers for data", "body": "`fetch()` is how the front-end asks a server for data. It returns a <b>Promise</b> — a box that fills later when the server answers.", "analogy": "Like ordering delivery: you get a receipt now, food arrives later." },
          { "type": "quiz", "question": "fetch() returns…", "options": ["A database", "A Promise (fills later)", "A CSS file", "Instant HTML"], "answer": 1, "explain": "Network takes time, so you get a Promise.", "hint": "A receipt, not the pizza." }
        ]}
      ]
    },
    {
      "id": "track2",
      "icon": "⚙️",
      "title": "Track 2 — Back-End",
      "lessons": [
        { "id": "t2l1", "title": "Servers Explained Simply", "steps": [
          { "type": "text", "heading": "A server is just a computer that answers", "body": "A server is a computer running a program that listens for requests and responds. That's the whole job. Node.js lets us write that program with JavaScript.", "analogy": "Server = a receptionist whose only job is answering requests." },
          { "type": "quiz", "question": "What does a server do?", "options": ["Only plays videos", "Listens for requests and responds", "Styles webpages", "Stores passwords only"], "answer": 1, "explain": "Requests in, responses out.", "hint": "Receptionist energy 📠" }
        ]},
        { "id": "t2l2", "title": "APIs: The Waiter Pattern", "steps": [
          { "type": "text", "heading": "APIs connect apps", "body": "An API lets one program ask another for data. Your front-end might ask an API for weather data, and the server answers with JSON.", "analogy": "The waiter pattern again — front-end orders, API delivers." },
          { "type": "quiz", "question": "An API's job is to…", "options": ["Style buttons", "Connect programs with requests/responses", "Delete databases", "Play music"], "answer": 1, "explain": "APIs are messengers between programs.", "hint": "Waiter again 🍽️" }
        ]},
        { "id": "t2l3", "title": "Express in 5 Minutes", "steps": [
          { "type": "text", "heading": "The tiny king of Node servers", "body": "Express makes a server in 3 lines: create it, define routes like `app.get('/hello', ...)`, and listen on a port. Requests in, responses out.", "analogy": "Express is a receptionist with name tags that routes visitors." },
          { "type": "quiz", "question": "In Express, a route is defined with…", "options": ["app.get(...)", "<div>", "console.style()", "SELECT *"], "answer": 0, "explain": "app.get tells Express what to do when someone visits that path.", "hint": "It starts with 'app'." },
          { "type": "code", "heading": "Route brain-teaser", "body": "Log the path your route would answer.", "starter": "console.log(\"/api/hello\");" },
          { "type": "write", "heading": "Your turn ✍️", "body": "Write a line that logs the path <b>/api/hello</b>. Show me you remember.", "expected": "/api/hello", "mustInclude": ["console.log"], "hint": "console.log(\"/api/hello\");" }
        ]},
        { "id": "t2l4", "title": "Databases in 60 Seconds", "steps": [
          { "type": "text", "heading": "Where data lives", "body": "A database is a structured warehouse for your app's data. SQL databases store tables (rows & columns); you ask for data with `SELECT`, add with `INSERT`.", "analogy": "A database is an Excel file that millions can read safely." },
          { "type": "quiz", "question": "Which SQL word asks for data?", "options": ["INSERT", "SELECT", "DELETE", "STYLE"], "answer": 1, "explain": "SELECT = give me this data.", "hint": "Like choosing items from a menu." }
        ]}
      ]
    },
    {
      "id": "track3",
      "icon": "🗄️",
      "title": "Track 3 — Databases & SQL",
      "lessons": [
        { "id": "t3l1", "title": "Tables, Rows & Columns", "steps": [
          { "type": "text", "heading": "Think spreadsheet", "body": "A SQL database stores data in <b>tables</b>. Each table has columns (name, email, age) and rows — one row per person/item. <b>SQL</b> is the language you use to ask it questions.", "analogy": "A table is an Excel sheet; SQL is how you talk to it." },
          { "type": "quiz", "question": "In a table, what is a row?", "options": ["A column name", "One item/person", "The whole database", "An error"], "answer": 1, "explain": "Columns = fields. Rows = individual records.", "hint": "One person = one…" },
          { "type": "code", "heading": "Name the query", "body": "Log which SQL word grabs data.", "starter": "console.log(\"SELECT\");" }
        ]},
        { "id": "t3l2", "title": "SELECT, INSERT, DELETE", "steps": [
          { "type": "text", "heading": "The big three", "body": "<b>SELECT</b> reads data, <b>INSERT</b> adds a row, <b>DELETE</b> removes one. That's most of day-to-day SQL. Always be careful with DELETE 😄", "analogy": "Reading the menu, placing an order, cancelling it." },
          { "type": "quiz", "question": "Which SQL adds a new row?", "options": ["SELECT", "INSERT", "DELETE", "CREATE TABLE"], "answer": 1, "explain": "INSERT = add. SELECT = read.", "hint": "It inserts something new." },
          { "type": "write", "heading": "Your turn ✍️", "body": "Write a console.log of the word you'd use to read data from a table.", "expected": "select", "mustInclude": ["console.log"], "hint": "console.log(\"SELECT\");" }
        ]},
        { "id": "t3l3", "title": "WHERE: Filtering Data", "steps": [
          { "type": "text", "heading": "Narrow it down", "body": "`WHERE` filters rows: `SELECT * FROM users WHERE age > 18;` — only the rows matching the condition come back.", "analogy": "WHERE is the bouncer at the door: it checks IDs." },
          { "type": "quiz", "question": "What does WHERE do?", "options": ["Sorts the table", "Filters rows by a condition", "Deletes the table", "Adds columns"], "answer": 1, "explain": "WHERE picks only matching rows.", "hint": "Bouncer with a checklist." }
        ]}
      ]
    },
    {
      "id": "track4",
      "icon": "🌿",
      "title": "Track 4 — Git & Version Control",
      "lessons": [
        { "id": "t4l1", "title": "Why Git Exists", "steps": [
          { "type": "text", "heading": "Your code's time machine", "body": "Git records every change you make, lets you go back, and lets teams work on the same code without chaos. GitHub is where you host it.", "analogy": "Git is a time machine; GitHub is the clubhouse for your code." },
          { "type": "quiz", "question": "What does Git let you do?", "options": ["Design logos", "Track and revert changes", "Host videos", "Write CSS"], "answer": 1, "explain": "Git tracks changes like versions of a document.", "hint": "Time machine ⏰" }
        ]},
        { "id": "t4l2", "title": "The 3-Command Starter", "steps": [
          { "type": "text", "heading": "git add, git commit, git push", "body": "<b>git add</b> stages your changes, <b>git commit</b> snapshots them, <b>git push</b> uploads them to GitHub. That loop covers 90% of daily work.", "analogy": "Pack your box (add), label it (commit), ship it (push)." },
          { "type": "quiz", "question": "Which command uploads to GitHub?", "options": ["git add", "git commit", "git push", "git envy"], "answer": 2, "explain": "Push = upload the shipped box.", "hint": "Think shipping." },
          { "type": "write", "heading": "Your turn ✍️", "body": "Log the command that uploads your commits.", "expected": "git push", "mustInclude": ["console.log"], "hint": "console.log(\"git push\");" }
        ]}
      ]
    },
    {
      "id": "track5",
      "icon": "🏗️",
      "title": "Track 5 — Projects",
      "lessons": [
        { "id": "t5l1", "title": "Project: Todo List Logic", "steps": [
          { "type": "text", "heading": "Build the brain of a todo app", "body": "You won't write HTML yet — you'll build the <b>logic</b>: an array of tasks, a function to add one, a function to list them. That's exactly how apps think.", "analogy": "First write the engine, then design the car body." },
          { "type": "code", "heading": "Try the starter", "body": "Run this, add your own task, and run it again.", "starter": "const tasks = [\"Learn HTML\", \"Practice CSS\"];\nfunction addTask(t) { tasks.push(t); }\naddTask(\"Your first project\");\nconsole.log(tasks);" },
          { "type": "write", "heading": "Your turn ✍️", "body": "From memory: create an array called tasks with one item, then log how many tasks there are using tasks.length.", "expected": "1", "mustInclude": ["console.log", "tasks"], "hint": "console.log(tasks.length);" }
        ]},
        { "id": "t5l2", "title": "Project: Mini Calculator", "steps": [
          { "type": "text", "heading": "Four functions, one calculator", "body": "A calculator is just 4 tiny functions: add, subtract, multiply, divide. Write them small, test each one. Small pieces = easy debugging.", "analogy": "Lego bricks. Each brick works alone; together they become a whole castle." },
          { "type": "code", "heading": "Starter logic", "body": "Run it, then change the numbers.", "starter": "function add(a, b) { return a + b; }\nfunction multiply(a, b) { return a * b; }\nconsole.log(add(2, 3));\nconsole.log(multiply(4, 5));" },
          { "type": "write", "heading": "Your turn ✍️", "body": "Write a function called double that returns n * 2, then log double(21).", "expected": "42", "mustInclude": ["function double", "console.log"], "hint": "function double(n) { return n * 2; } console.log(double(21));" }
        ]}
      ]
    }
  ]
};
