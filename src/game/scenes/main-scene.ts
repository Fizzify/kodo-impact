import { Actor, Color, Scene, Vector } from "excalibur";

export class MainScene extends Scene {
    onInitialize() {
        // Create a square actor
        const square = new Actor({
            pos: new Vector(400, 300), // Center position (assuming 800x600 viewport)
            width: 50,
            height: 50,
            color: Color.Red
        });

        // Add the square to the scene
        this.add(square);
    }
}
