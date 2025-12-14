document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1550292554-7e53d78fd7a5?ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjQwODkxNjR8&ixlib=rb-4.1.0)`

// ********************************Clock********************************
const rendertime = () => {
    const clock = document.getElementById('clock')

    const updateTime = () => {
        clock.textContent = new Date().toLocaleString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        })

    }

    updateTime()

    setInterval(updateTime, 1000)
}

rendertime()