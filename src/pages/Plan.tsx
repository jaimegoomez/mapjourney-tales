import { Button } from "@/components/ui/button";
import { Check, X, HelpCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PlanCard } from "@/components/plan/PlanCard";
import { ComparisonTable } from "@/components/plan/ComparisonTable";

export default function Plan() {
  const [selectedView, setSelectedView] = useState<'cards' | 'comparison'>('cards');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const features = {
    basic: {
      "Registro de ubicaciones": {
        available: true,
        limit: "Hasta 50 ubicaciones",
        tooltip: "Guarda tus lugares favoritos con fotos y notas"
      },
      "Compartir experiencias": {
        available: true,
        limit: "Básico",
        tooltip: "Comparte tus viajes en la comunidad"
      },
      "Visualización de mapas": {
        available: true,
        limit: "Estándar",
        tooltip: "Visualiza tus ubicaciones en el mapa"
      },
      "Comunidad de viajeros": {
        available: true,
        limit: "Acceso básico",
        tooltip: "Conecta con otros viajeros"
      },
      "Anuncios": {
        available: true,
        limit: "Incluidos",
        tooltip: "Verás anuncios mientras usas la app"
      }
    },
    premium: {
      "Registro de ubicaciones": {
        available: true,
        limit: "Ilimitado",
        tooltip: "Sin límites en el registro de ubicaciones"
      },
      "Compartir experiencias": {
        available: true,
        limit: "Avanzado",
        tooltip: "Comparte con funciones premium y más detalles"
      },
      "Visualización de mapas": {
        available: true,
        limit: "Premium",
        tooltip: "Mapas personalizados y más capas de información"
      },
      "Comunidad de viajeros": {
        available: true,
        limit: "Acceso VIP",
        tooltip: "Acceso prioritario a eventos y contenido exclusivo"
      },
      "Estadísticas avanzadas": {
        available: true,
        limit: "Completo",
        tooltip: "Análisis detallado de tus viajes"
      },
      "Soporte prioritario": {
        available: true,
        limit: "24/7",
        tooltip: "Atención personalizada prioritaria"
      },
      "Anuncios": {
        available: false,
        limit: "Sin anuncios",
        tooltip: "Experiencia libre de anuncios"
      }
    }
  };

  const plans = [
    {
      name: "Gratuito",
      price: "0€",
      description: "Perfecto para empezar tu aventura",
      features: features.basic,
      buttonText: "Comenzar gratis",
      buttonLink: "/register",
      highlighted: false,
      badge: "Popular"
    },
    {
      name: "Premium",
      price: "5,50€",
      period: "/mes",
      description: "Para viajeros apasionados",
      features: features.premium,
      buttonText: "Próximamente",
      buttonLink: "#",
      highlighted: true,
      badge: "Próximamente"
    }
  ];

  const FeatureTooltip = ({ content }: { content: string }) => (
    <Tooltip>
      <TooltipTrigger>
        <HelpCircle className="w-4 h-4 text-gray-400 hover:text-[#40CEB5] transition-colors" />
      </TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  );

  return (
    <div className="min-h-screen py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center parallax-bg opacity-20" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Planes y Precios</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus aventuras. Comienza gratis y actualiza cuando lo necesites.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant={selectedView === 'cards' ? 'default' : 'outline'}
              onClick={() => setSelectedView('cards')}
              className="transition-all duration-300 hover:scale-105"
            >
              Ver planes
            </Button>
            <Button
              variant={selectedView === 'comparison' ? 'default' : 'outline'}
              onClick={() => setSelectedView('comparison')}
              className="transition-all duration-300 hover:scale-105"
            >
              Comparar planes
            </Button>
          </div>
        </div>

        <div className="transition-all duration-300">
          {selectedView === 'cards' ? (
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <PlanCard key={plan.name} {...plan} />
              ))}
            </div>
          ) : (
            <ComparisonTable plans={plans} />
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            * El plan Premium estará disponible próximamente. Mientras tanto, disfruta de todas las funcionalidades básicas de forma gratuita.
          </p>
        </div>
      </div>
    </div>
  );
} 