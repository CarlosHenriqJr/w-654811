
export type Project = {
  id: number;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  isFeatured?: boolean;
  link: string;
  details?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestão Empresarial",
    brand: "Creative Generation",
    description: "Desenvolvimento de um sistema completo para gerenciamento de processos internos, finanças, RH e relacionamento com clientes, com integrações via APIs e dashboards personalizados.",
    tags: ["ERP", "CRM", "Dashboard", "Integrações API"],
    imageUrl: "/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png",
    isFeatured: true,
    link: "/projects/firecat",
    details: `
      Esse projeto envolveu a criação de um sistema empresarial completo com módulos integrados para gestão financeira, recursos humanos, estoque, vendas e relacionamento com clientes. A plataforma conta com dashboards personalizados, relatórios avançados e integração com sistemas de terceiros via APIs.
    `
  },
  {
    id: 2,
    title: "Aplicativo Mobile de Vendas",
    brand: "E-commerce Solutions",
    description: "Aplicativo mobile completo desenvolvido com FlutterFlow para uma empresa de e-commerce, incluindo catálogo de produtos, sistema de pagamentos e gestão de pedidos.",
    tags: ["FlutterFlow", "E-commerce", "Mobile", "Pagamentos"],
    imageUrl: "/lovable-uploads/700e27d7-0513-4bfa-8ac4-f7fd6087594c.png",
    link: "/projects/sport-retail"
  },
  {
    id: 3,
    title: "Portal de Atendimento ao Cliente",
    brand: "Multiservice S.A.",
    description: "Portal desenvolvido em Bubble para centralizar o atendimento ao cliente, com sistema de tickets, base de conhecimento e chat integrado com agentes de IA.",
    tags: ["Bubble", "Helpdesk", "Chatbot", "IA"],
    imageUrl: "/lovable-uploads/7293c494-769c-421b-9028-d8ccb0bdd80a.png",
    link: "/projects/workwear"
  },
  {
    id: 4,
    title: "Sistema de Gestão de Academia",
    brand: "Fitness Pro",
    description: "Plataforma web e mobile para gerenciamento de academias e estúdios de fitness, com controle de presença, agendamento de aulas e acompanhamento de resultados.",
    tags: ["Fitness", "Agendamento", "Mobile", "Web"],
    imageUrl: "/lovable-uploads/843446fe-638e-4efb-b885-ed3cd505325a.png",
    link: "/projects/hockey"
  },
  {
    id: 5,
    title: "Aplicativo de Gestão Pet",
    brand: "PetCare Solutions",
    description: "Aplicativo para clínicas veterinárias e petshops gerenciarem agendamentos, histórico médico dos animais e comunicação com tutores, com lembretes automáticos via notificações.",
    tags: ["Pet", "Veterinária", "Agendamento", "Mobile"],
    imageUrl: "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png",
    link: "/projects/pet-tracker"
  }
];
