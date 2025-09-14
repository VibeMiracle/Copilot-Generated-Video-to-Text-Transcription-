// Simple demo: Simulates transcription.
// To connect to a real API, see the instructions below.

document.getElementById('transcribeBtn').onclick = async function() {
    const url = document.getElementById('videoUrl').value.trim();
    const output = document.getElementById('output');
    if (!url) {
        output.textContent = "Please enter a video URL.";
        return;
    }

    output.innerHTML = '<span class="loading">Transcribing video, please wait...</span>';

    // --- DEMO MODE: This just simulates a transcription result ---
    setTimeout(() => {
        output.textContent = `Transcription of video at:\n${url}\n\n[This is a demo. To use a real transcription service, see script.js for details.]`;
    }, 2500);

    // --- REAL API INTEGRATION (example, not active) ---
    // 1. Get a transcription API key (e.g., AssemblyAI, OpenAI Whisper, Deepgram)
    // 2. Use fetch() to send the video URL to your backend or API endpoint
    // Example:
    // const response = await fetch('https://your-backend.com/transcribe', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer YOUR_API_KEY' },
    //     body: JSON.stringify({ videoUrl: url })
    // });
    // const data = await response.json();
    // output.textContent = data.transcript || "Could not retrieve transcription.";
};
