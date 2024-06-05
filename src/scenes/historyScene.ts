import { Actor, Color, Engine, FadeInOut, Keys, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class historyScene extends Scene {
    // Declaração do elementoTexto
    elementoTexto?: HTMLElement

    // Ao entrar ou sair da cena, ultiliza o feito de transição lenta
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        
        this.backgroundColor = Color.fromHex("#403f4c")

        // Criar elemento com a descrição da empresa
        this.elementoTexto = document.createElement("div") as HTMLElement
        
        // Definir opacidade do elemento para 1 = visível
        this.elementoTexto.style.opacity = "1"

        // Inserir elementotexto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementoTexto)

        // Adicionar classe na div criada (elementoTexto)
        this.elementoTexto.classList.add("sobre-gamifica")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        this.elementoTexto.innerHTML = ` <h2>Sobre o GamificAi</h2>
        <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
          usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
          experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
          equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
          desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p>`

         // Adicionar logo vertical
        // Configurar actor logo vertical
        let actorLogoVertical = new Actor({
            pos: vec(engine.drawWidth - 300,engine.halfDrawHeight),
        })

        // Carregando a imagem do logo
        let imagemLogoVertical = Resources.LogoVertical.toSprite()
        imagemLogoVertical.scale = vec(0.7, 0.7)

        // Ãdicionar a imagem no Actor
        actorLogoVertical.graphics.add(imagemLogoVertical)

        // Renderizar o Actor na cena
        this.add(actorLogoVertical)

        // Configurara cena para monitorar o evento de tecla pressionada
        this.input.keyboard.on("press", (event) => {
            if(event.key == Keys.Enter) {
                // Direcionar para a proxima cena
                engine.goToScene("gamificacao")
            }
        })
    }
}     