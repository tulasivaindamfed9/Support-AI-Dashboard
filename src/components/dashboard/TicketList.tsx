import type { Ticket } from "../../types/ticket";
import { useAppDispatch } from "../../redux/hooks";
import { updateStatus } from "../../redux/slices/ticketSlice";
import AiReply from "../ai/AiReply";

interface TicketListProps {
  tickets: Ticket[];
}

const TicketList = ({ tickets }: TicketListProps) => {
  const dispatch = useAppDispatch();

  const changeStatus = (id: number, status: Ticket["status"]) => {
    dispatch(updateStatus({ id, status }));
  };

  return (
    <div className="bg-white rounded shadow mt-8">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Priority</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="border-t">
              <td className="p-3">
                {ticket.title}
                <AiReply description={ticket.description} />
              </td>

              <td className="p-3">{ticket.priority}</td>

              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-white text-sm
                  ${ticket.status === "open" && "bg-red-500"}
                  ${ticket.status === "pending" && "bg-yellow-500"}
                  ${ticket.status === "resolved" && "bg-green-500"}
                `}
                >
                  {ticket.status}
                </span>
              </td>

              <td className="p-3 flex gap-2">
                <button
                  onClick={() => changeStatus(ticket.id, "pending")}
                  className="text-sm bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Pending
                </button>

                <button
                  onClick={() => changeStatus(ticket.id, "resolved")}
                  className="text-sm bg-green-600 text-white px-2 py-1 rounded"
                >
                  Resolve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;
