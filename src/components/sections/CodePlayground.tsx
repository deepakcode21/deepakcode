import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Play, RefreshCw, Copy, Terminal } from "lucide-react";
import Button from "../ui/Button";
import { useTheme } from "../../context/ThemeContext";

const CodePlayground: React.FC = () => {
  const { theme } = useTheme();
  const [consoleOutput, setConsoleOutput] = useState<string[]>([
    "> MERN Stack Demo initialized",
    "> Server running on port 3000",
    "> Connected to MongoDB Atlas",
    "> Ready to handle requests!",
  ]);

  const javascriptCode = `// Simple Express server setup
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/demo')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Simple Todo model
const TodoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  created: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', TodoSchema);

// Routes
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    const todo = new Todo({
      text: req.body.text
    });
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});`;

  const handleRunCode = () => {
    const newOutput = [
      ...consoleOutput,
      "> Executing code...",
      "> POST /api/todos - Created new todo",
      "> GET /api/todos - Retrieved 3 todos",
      "> Operation completed successfully",
    ];
    setConsoleOutput(newOutput);
  };

  const handleClearConsole = () => {
    setConsoleOutput(["> Console cleared", "> Ready for new operations"]);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(javascriptCode);
  };

  return (
    <Section
      id="playground"
      title="Live Code Playground"
      subtitle="Experiment with a simple MERN stack demo right in your browser"
      className="bg-skill-bg"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <Card variant="neuro" className="overflow-hidden">
          <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="ml-2 text-sm font-mono">server.js</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleCopyCode}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Copy code"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>
          <div className="max-h-[400px] overflow-auto">
            <SyntaxHighlighter
              language="javascript"
              style={atomOneDark}
              showLineNumbers
              customStyle={{
                margin: 0,
                padding: "16px",
                background: theme === "dark" ? "#0d1117" : "#1e1e1e",
              }}
            >
              {javascriptCode}
            </SyntaxHighlighter>
          </div>
        </Card>

        {/* Console Output */}
        <div className="flex flex-col h-full">
          <Card
            variant="neuro"
            className="flex-grow overflow-hidden flex flex-col"
          >
            <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
              <div className="flex items-center">
                <Terminal size={16} className="mr-2" />
                <span className="text-sm font-mono">Console</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handleClearConsole}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Clear console"
                >
                  <RefreshCw size={16} />
                </button>
              </div>
            </div>
            <div className="bg-gray-900 text-gray-300 p-4 font-mono text-sm flex-grow overflow-auto">
              {consoleOutput.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="mb-1"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </Card>

          <div className="mt-4">
            <Button
              variant="primary"
              fullWidth
              icon={<Play size={18} />}
              onClick={handleRunCode}
            >
              Run Code
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          This is a simplified demo of a MERN stack application. In a real
          project, I build fully functional applications with proper
          architecture, error handling, and testing.
        </p>
      </div>
    </Section>
  );
};

export default CodePlayground;
