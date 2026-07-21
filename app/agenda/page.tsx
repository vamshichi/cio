export default function AgendaPage() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/pdf/agenda.pdf"
        className="w-full h-full border-0"
        title="Agenda PDF"
      />
    </div>
  );
}