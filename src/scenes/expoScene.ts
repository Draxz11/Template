import { Actor, CollisionType, Color, Engine, FadeInOut, Resource, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";
import { Npc } from "../actors/npc";

export class expoScene extends Scene{
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        // Carregar o mapa
        let tiledMap = Resources.Mapa

        // Definir offset para a renderização do mapa
        let offsetX = 138
        let offsetY = 100

        // Adicionar o mapa na cena
        tiledMap.addToScene(this, {
            pos: vec(offsetX, offsetY),

        })

        // Definir o zoom da camera para aumentar um pouco a vizualização
        this.camera.zoom = 1.4

        // Carregar spaw point player
        let spawPoint = tiledMap.getObjectsByName("player_spaw")[0]

        // Criação e configuração do Player
        let jogador = new Player(vec(spawPoint.x + offsetX,spawPoint.y + offsetY))

        // Define z-index do player, útil se algum outro elemento ficar "por cima" do jogador
        jogador.z = 10

        // Adicionar o Player na cena
        this.add(jogador)
        
        // Pegar spaw Points dos NPC'S 
        let npcSpawPointA = tiledMap.getObjectsByName("npc_a")[0]
        let npcSpawPointB = tiledMap.getObjectsByName("npc_b")[0]
        let npcSpawPointC = tiledMap.getObjectsByName("npc_c")[0]

        // Configurar NPCs
        let npcA = new Npc(
            vec(npcSpawPointA.x + offsetX, npcSpawPointA.y + offsetY),
            Color.Chartreuse,
            "NpcA"
        )

        let npcB = new Npc(
            vec(npcSpawPointB.x + offsetX, npcSpawPointB.y + offsetY),
            Color.Blue,
            "NpcB"
        )

        let npcC = new Npc(
            vec(npcSpawPointC.x + offsetX, npcSpawPointC.y + offsetY),
            Color.Yellow,
            "NpcC"
        )

        // Adicionar NPCs
        this.add(npcA)
        this.add(npcB)
        this.add(npcC)

        // Focar a camera no Player
        this.camera.strategy.lockToActor(jogador)
        // this.camera.zoom = 2

        // Adicionar clisão com cada objeto
        // Pegar a camada de objetos colisores
        let camadaObjetoColisores = tiledMap.getObjectLayers("ObjetosColisores")[0]

        console.log(camadaObjetoColisores);

        // Percorrer abjetos com foreach e para cada objeto,renderizar um actor
        camadaObjetoColisores.objects.forEach(objeto => {
            // Configurar actor
            const objetoAtual = new Actor({
                name: objeto.name,
                x: objeto.x + offsetX + (objeto.tiledObject.width! / 2),
                y: objeto.y + offsetY + (objeto.tiledObject.height! / 2),
                width:objeto.tiledObject.height,
                collisionType: CollisionType.Fixed,
                color: Color.Blue,
                z: 99
            })

            // Adicionar o colisor do objeto na cena
            this.add(objetoAtual)
        })

    }
    
}