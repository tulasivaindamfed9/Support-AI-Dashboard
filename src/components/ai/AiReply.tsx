import { useState } from "react"

interface Props {
  description: string
}

const AiReply = ({ description }: Props) => {
    // this component must receive description as a prop from the parent component (TicketDetails) to generate the AI reply based on the ticket description

  const [reply, setReply] = useState("")

  const generateReply = () => {

    // mock AI response
    const generated = `
Hi,

Thank you for contacting support.

We understand the issue: "${description}"

Our team is currently reviewing the problem and we will resolve it shortly.

Best regards,
Support Team
`

    setReply(generated)
  }

  return (

    <div className="mt-2">

      <button
        onClick={generateReply}
        className="text-sm bg-blue-600 text-white px-3 py-1 rounded"
      >
        Generate AI Reply
      </button>

      {reply && (
        <div className="mt-2 p-2 bg-gray-100 rounded text-sm whitespace-pre-line">
          {reply}
        </div>
      )}

    </div>
  )
}

export default AiReply