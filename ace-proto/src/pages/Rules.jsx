import { Link } from 'react-router-dom'

const Rules = () => {
  return (
    <main className="main-content">
      <div className="hero-section">
        <div className="logo-container">
          <Link to="/">
            <img src="/logo.png" alt="ACE Studios Logo" className="logo" />
          </Link>
        </div>
        <h1>Server Rules</h1>
        <p>Guidelines for a fair and enjoyable gaming experience.</p>
      </div>
      
      <div className="rules-container">
        <div className="rules-row">
          <div className="rule-section">
          <h2>Discord Server Rules</h2>
          <p>To keep our community fun and safe for everyone, please follow these rules. Breaking them may result in warnings or bans. Let's work together to create a great environment!</p>
          <ul>
            <li>1. Be Respectful - Treat everyone with respect. No harassment, bullying, or discrimination. We're all here to have a good time!</li>
            <li>2. No Spamming - Please don't spam the chats with unnecessary messages, excessive emojis, or random links. Keep it clean and meaningful!</li>
            <li>3. Keep it Safe for Work (SFW) - This is a SFW server. No inappropriate content, including explicit images, language, or discussions.</li>
            <li>4. Respect Privacy - Do not share anyone's personal information without their permission. Respect each other's privacy.</li>
            <li>5. Follow Discord's TOS - Make sure to follow Discord's Terms of Service and Community Guidelines at all times.</li>
            <li>6. No Hate Speech - Hate speech, including racist, sexist, or discriminatory remarks, will not be tolerated.</li>
            <li>7. No Self-Promotion - Please do not promote your own or others' social media, servers, or businesses without permission from staff.</li>
            <li>8. Use Appropriate Channels - Keep conversations in the appropriate channels. This keeps the server organized and enjoyable for everyone!</li>
            <li>9. No Malicious Links - Do not post harmful or malicious links, including those that lead to phishing, scams, or inappropriate content.</li>
            <li>10. Report Issues - If you see someone breaking the rules, report it to a staff member. Don't try to handle it yourself!</li>
          </ul>
          <p>Thank you for helping keep the server awesome!</p>
          </div>
          
          <div className="rule-section">
          <h2>Squad Server Rules</h2>
          <ul>
            <li>1. Zero tolerance of Discrimination / Direct personal attacks.</li>
            <li>2. Zero tolerance for Hacking / Glitching / Ghosting.</li>
            <li>3. No Intentional Team Killing / Asset Wasting / Trolling / Griefing. Vehicle ramming is considered asset wasting.</li>
            <li>4. Acknowledge ALL team kills in TEAM chat.</li>
            <li>5. Squad leaders MUST have an SL kit / Have a microphone / Use it in English.</li>
            <li>6. DO NOT create squads and immediately give away SL. Also known as 'Squad Baiting'.</li>
            <li>7. Any action deemed harmful to the server population/cohesion may result in removal from the community.</li>
            <li>8. Zero tolerance for non-Clan Clash recruiting/advertising. Use appropriate channels in Discord; this rule is for in-game.</li>
            <li>9. Main Camping Rules: Main Camping is based off intent. Do not interfere with assets or players entering/leaving main. No mines within 300 meters of main.</li>
            <li>10. You MUST use standard Latin alphabet characters (A-Z) in chat and usernames. No use of non-Latin scripts (such as Chinese, Cyrillic, etc.). Autokick is set for this.</li>
          </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Rules
