import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

export default function PaymentSection() {
  const benefits = [
    "30 dias de desafios personalizados",
    "Receitas saudáveis e práticas",
    "Checkpoints diários de progresso",
    "Dicas de nutrição e exercícios",
    "Acompanhamento visual do seu progresso",
    "Acesso vitalício ao conteúdo"
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Comece Sua Transformação Hoje
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Invista em você e alcance o corpo dos seus sonhos até o verão
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-foreground">O que está incluído:</h3>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-chart-3 rounded-full p-1 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>

          <Card className="shadow-xl border-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-2">
                <div className="bg-primary/10 rounded-full p-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Plano Completo</CardTitle>
              <CardDescription>Acesso total ao desafio de 30 dias</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div>
                <div className="text-sm text-muted-foreground line-through mb-1">
                  De R$ 59,90
                </div>
                <div className="text-5xl font-bold text-primary mb-2" data-testid="text-price">
                  R$ 29,90
                </div>
                <p className="text-sm text-muted-foreground">
                  Pagamento único • Sem mensalidades
                </p>
              </div>

              <Button 
                size="lg" 
                className="w-full text-lg py-6 h-auto font-semibold"
                data-testid="button-payment"
              >
                Acessar Agora
              </Button>

              <div className="text-xs text-muted-foreground">
                🔒 Pagamento 100% seguro
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            "Melhor investimento que fiz para minha saúde! Já perdi 5kg nos primeiros 15 dias." - Ana Silva
          </p>
        </div>
      </div>
    </section>
  );
}
