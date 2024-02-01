import { io } from "socket.io-client";
function App() {

  const socket = io("http://localhost:8080")

  return (
    <div>
      hello
    </div>
  )
}

export default App
