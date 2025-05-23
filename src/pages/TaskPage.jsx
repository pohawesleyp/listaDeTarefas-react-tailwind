import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-blue-400 p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-x font-bold bg-sky-600">{title}</h2>
          <p className="text-slate-950">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
