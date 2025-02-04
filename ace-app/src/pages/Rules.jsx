import { useEffect, useState } from 'react'

function Rules() {
  const [discordRules, setDiscordRules] = useState([])
  const [squadRules, setSquadRules] = useState([])

  useEffect(() => {
    // Simulating rules data - in real app would fetch from API/backend
    setDiscordRules([
      "Be Respectful - Treat everyone with respect. No harassment, bullying, or discrimination. We're all here to have a good time!",
      "No Spamming - Please don't spam the chats with unnecessary messages, excessive emojis, or random links. Keep it clean and meaningful!",
      "Keep it Safe for Work (SFW) - This is a SFW server. No inappropriate content, including explicit images, language, or discussions.",
      "Respect Privacy - Do not share anyone's personal information without their permission. Respect each other's privacy.",
      "Follow Discord's TOS - Make sure to follow Discord's Terms of Service and Community Guidelines at all times.",
      "No Hate Speech - Hate speech, including racist, sexist, or discriminatory remarks, will not be tolerated.",
      "No Self-Promotion - Please do not promote your own or others' social media, servers, or businesses without permission from staff.",
      "Use Appropriate Channels - Keep conversations in the appropriate channels. This keeps the server organized and enjoyable for everyone!",
      "No Malicious Links - Do not post harmful or malicious links, including those that lead to phishing, scams, or inappropriate content.",
      "Report Issues - If you see someone breaking the rules, report it to a staff member. Don't try to handle it yourself!"
    ])

    setSquadRules([
      "Zero tolerance of Discrimination / Direct personal attacks.",
      "Zero tolerance for Hacking / Glitching / Ghosting.",
      "No Intentional Team Killing / Asset Wasting / Trolling / Griefing. Vehicle ramming is considered asset wasting.",
      "Acknowledge ALL team kills in TEAM chat.",
      "Squad leaders MUST have an SL kit / Have a microphone / Use it in English.",
      "DO NOT create squads and immediately give away SL. Also known as 'Squad Baiting'.",
      "Any action deemed harmful to the server population/cohesion may result in removal from the community.",
      "Zero tolerance for non-Clan Clash recruiting/advertising. Use appropriate channels in Discord; this rule is for in-game.",
      "Main Camping Rules: Main Camping is based off intent. Do not interfere with assets or players entering/leaving main. No mines within 300 meters of main.",
      "You MUST use standard Latin alphabet characters (A-Z) in chat and usernames. No use of non-Latin scripts (such as Chinese, Cyrillic, etc.). Autokick is set for this."
    ])
  }, [])

  return (
    <main className="rules-container">
      <div className="rules-section">
        <h3>Discord Server Rules</h3>
        <div className="rules-content" id="discord-rules-full">
          <p>To keep our community fun and safe for everyone, please follow these rules. Breaking them may result in warnings or bans. Let's work together to create a great environment!</p>
          <ul>
            {discordRules.map((rule, index) => (
              <li key={index}>{`${index + 1}. ${rule}`}</li>
            ))}
          </ul>
          <p>Thank you for helping keep the server awesome!</p>
        </div>
      </div>
      
      <div className="rules-section">
        <h3>Squad Server Rules</h3>
        <div className="rules-content" id="squad-rules-full">
          <ul>
            {squadRules.map((rule, index) => (
              <li key={index}>{`${index + 1}. ${rule}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Rules
