function Clock() {
    return (
        <div>
            <h1>Time: {new Date().toLocaleTimeString()}</h1>
        </div>
    )
}

export default Clock;