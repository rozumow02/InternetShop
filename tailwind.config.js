/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      colors: {
        "blue-0": "#87BAFC",
        "blue-0.5": "#7AABEC",
        "blue-1": "#6C9DDB",
        "blue-1.5": "#5F8ECB",
        "blue-2": "#5280BB",
        "blue-3": "#37629A",
        "blue-4": "#1D457A",
        "blue-5": "#022859",
        "blue-6": "#022047",
        "blue-7": "#011835",
        "blue-8": "#011024",
        "blue-8.5": "#010C1B",
        "blue-9": "#000812",
        "blue-9.5": "#000409",
        "blue-10": "#000000",
        "main-red": "#CE2040",
        'gray-1': "#F3F3F3",
        'black-1': "#333333",
        'black-2': "#1B1B1B",
        'red-main': "#CE2040",
        "gray-main": "#6C6C6C",
        "text-blue-1": '#022859',
        "gray-input": "#F5F7FA",
        "main-blue": "#5284C3"
      }
    },
  },
  plugins: [],
}