import { Actor, Color, Engine, FadeInOut, Keys, Resource, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetoInteracao: any
    private elementoTexto?: HTMLElement
    private empresa?: Actor

    private textoDaCena: string = ""
    
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        // Criar elemento com a descrição do case
        this.elementoTexto = document.createElement("div") as HTMLElement
        this.elementoTexto.classList.add("texto-case")

        // Adicionar o elemento ao conteiner game
        let containerGame =document.querySelector(".container-game")
        containerGame?.appendChild(this.elementoTexto)

        // Ao pressionar a tecla Esc voltar para a exposição
        this.input.keyboard.on("press",(event) => {
            if (event.key == Keys.Esc) {
                engine.goToScene("exposicao")
            }
        })

        // Criar actor para receber as imagens
        this.empresa = new Actor({
            pos: vec(engine.drawWidth -300, engine.halfDrawHeight -50)
        })

        // Carregar imagens das empresas
        let PersonagemPixeladoa = Resources.PersonagemPixeladoa.toSprite()
        let PersonagemPixeladob = Resources.PersonagemPixeladob.toSprite()
        let PersonagemPixeladoc = Resources.PersonagemPixeladoc.toSprite()
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        
        // Faz a caixa texto aparecer ao chegar na cena
        this.elementoTexto!.style.opacity = "1"

        // Receber os dados passados pela cena anterior
        this.objetoInteracao = context.data

       if (this.objetoInteracao.nomeDaMesa == "mesa_stand_a") {
        // Mesa A detectada
        this.
       }
        // Se for B
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.textoDaCena = "Essa é a descrição do case B"
            this.elementoTexto!.innerHTML = `<h2>NovaEra Software
            <h2/><p>A NovaEra Software é uma empresa de desenvolvimento de software que se concentra na criação de soluções tecnológicas de ponta para empresas de todos os portes. Com um portfólio abrangente de serviços que inclui desenvolvimento de aplicativos móveis, sistemas de gestão empresarial e plataformas de e-commerce, a NovaEra se destaca por sua abordagem inovadora e personalizada. A missão da empresa é transformar ideias em soluções digitais eficientes e robustas, ajudando seus clientes a alcançar maior produtividade e competitividade no mercado.<p/>`
        
            // inserir o sprite no actor da mesa A
            this.empresa?.graphics.add(this.listaImagens![2])

            // Mudar o zoom da imagem 
            this.actorempresa!.graphic.current!.scale = vec(0.2 , 0.2)

        }
        
        // Se for C
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.textoDaCena = "Essa é a descrição do case C"
            this.elementoTexto!.innerHTML = `<h2>GourmetExpress<h2/><p>A GourmetExpress é uma empresa de entrega de refeições gourmet que combina conveniência e alta gastronomia. Focada em proporcionar uma experiência culinária excepcional, a GourmetExpress trabalha com chefs renomados para criar um menu diversificado e de alta qualidade, oferecendo pratos preparados com ingredientes frescos e selecionados. A empresa se diferencia pela entrega rápida e eficiente, garantindo que os clientes recebam suas refeições no ponto perfeito para consumo. Ideal para quem busca praticidade sem abrir mão do sabor e da sofisticação.<p/>`
       
            // inserir o sprite no actor da mesa A
            this.empresa?.graphics.add(this.listaImagens![3])

            // Mudar o zoom da imagem 
            this.actorempresa!.graphic.current!.scale = vec(0.2 , 0.2)

        }
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // Faz a caixa de texto desaparecer ao mudar de cena
        this.elementoTexto!.style.opacity = "0"
    }


}