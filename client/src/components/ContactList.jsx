import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import { useAuthStore } from "../store/useAuthStore";

function ContactList() {
  const { getAllContacts, allContacts, setSelectedUser, isUsersLoading } =
    useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <>
      {allContacts.map((contact) => {
        const isOnline = onlineUsers.some(
          (id) => String(id) === String(contact._id),
        );

        return (
          <div key={contact._id} onClick={() => setSelectedUser(contact)}>
            <div className="flex items-center gap-3">
              <div className="relative size-12 shrink-0">
                <img
                  src={contact.profilePic || "/avatar.png"}
                  alt={contact.fullname}
                  className="size-12 rounded-full object-cover"
                />

                <span
                  className={`absolute bottom-0 right-0 size-3 rounded-full border-2 border-slate-900 ${
                    isOnline ? "bg-green-500" : "bg-gray-500"
                  }`}
                />
              </div>

              <h4 className="text-slate-200 font-medium">{contact.fullname}</h4>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default ContactList;
