import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Container, TextField, Button, Typography } from '@mui/material'

function App() {
  const [message, setMessage] = useState("")
  const socket = io("http://localhost:8080")

  const handleSubmit = () => {
    socket.emit("message", message)
    setMessage("")
  }

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
    })
    socket.on("receive-message", (data) => {
      console.log(data);
    })
  }, [])

  return (
    <Container>
      <Typography variant="h1" color="red" gutterBottom textAlign={'center'} fontSize={'4rem'}>
        Welcome to Socket.io
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <TextField id="message" autoComplete="off" value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          send
        </Button>
      </div>
    </Container>
  )
}

export default App
