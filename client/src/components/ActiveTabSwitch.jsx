import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="mx-3 my-2 grid grid-cols-2 gap-2 rounded-xl bg-slate-800 p-1.5">
      <button
        type="button"
        onClick={() => setActiveTab("chats")}
        className={`rounded-lg py-2 text-sm font-medium transition-colors ${
          activeTab === "chats"
            ? "bg-cyan-500/15 text-cyan-400"
            : "text-slate-400 hover:bg-slate-700 hover:text-white"
        }`}
      >
        Chats
      </button>

      <button
        type="button"
        onClick={() => setActiveTab("contacts")}
        className={`rounded-lg py-2 text-sm font-medium transition-colors ${
          activeTab === "contacts"
            ? "bg-cyan-500/15 text-cyan-400"
            : "text-slate-400 hover:bg-slate-700 hover:text-white"
        }`}
      >
        Contacts
      </button>
    </div>
  );
}

export default ActiveTabSwitch;