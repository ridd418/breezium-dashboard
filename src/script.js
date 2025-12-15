import { update as updateBG } from "dynamicbackground"
import "zenquotes"

// ********************************Clock********************************
const rendertime = () => {
    const clock = document.getElementById('clock')

    const updateTime = () => {
        clock.textContent = new Date().toLocaleString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        })

        updateBG()
    }

    updateTime()

    setInterval(updateTime, 1000)
}

rendertime()