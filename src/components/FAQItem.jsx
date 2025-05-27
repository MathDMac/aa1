import { useState, useRef, useEffect } from "react";
import ListFaq from "../utils/faqData.js";

const FAQItem = () => {
  const [active, setActive] = useState(null);
  const animateRef = useRef(null);

  const toggleAction = (id) => {
    setActive(active === id ? null : id);
  };

  useEffect(() => {
    if (active !== null && animateRef.current) {
      animateRef.current.scrollIntoView({ behavior: "smooth" ,block:"center"});
    }
  }, [active]);

  return (
    <div className="overflow-y-scroll backdrop-blur-md bg-white/20 rounded-xl p-5 animate-jump-in animate-once animate-duration-1000 animate-delay-100">
      <div className="w-full h-full space-y-5 p-10">
        {ListFaq.faq.map((item) => (
          <div key={item.id} className="border p-2">
            <div className="flex justify-between pl-4 border bg-gradient-to-l from-blue-400 to-blue-950">
              <p className="text-white">{item.pergunta}</p>
              <button
                className="text-black font-bold mr-4"
                onClick={() => toggleAction(item.id)}
              >
                {active === item.id ? "-" : "+"}
              </button>
            </div>
            <p
              className={active === item.id ? "" : "hidden"}
              ref={active === item.id ? animateRef : null}
            >
              {item.resposta}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQItem;