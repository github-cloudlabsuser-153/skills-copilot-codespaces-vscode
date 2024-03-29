import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div>
            <textarea
                value={markdown}
                onChange={handleChange}
            />
            <ReactMarkdown>
                {markdown}
            </ReactMarkdown>
        </div>
    );
}

function reverseSentence(sentence) {
    let reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}
const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

const names = data.flat().map(person => person.name);
console.log(names);

// Extract ages from the data array
const ages = data.flat().map(person => person.age);
console.log(ages);