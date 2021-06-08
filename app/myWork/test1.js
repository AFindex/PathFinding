import { Renderer, GeometryBase, Shader, Material } from '../claygl-1.3.0/dist/claygl';

const vsCode = `
attribute vec3 position: POSITION;
void main() {
    gl_Position = vec4(position, 1.0);
}
`;
const fsCode = `
void main() {
    gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
}
`;

const renderer = new Renderer({
    canvas: document.getElementById('main')
});
renderer.resize(400, 400);

const geometry = new GeometryBase();
geometry.createAttribute('position', 'float', 3);
// Add triangle vertices to position attribute.
geometry.attributes.position.fromArray([
    [-0.5, -0.5, 0],
    [0.5, -0.5, 0],
    [0, 0.5, 0]
]);

const material = new Material({
    shader: new Shader(vsCode, fsCode)
});
renderer.renderPass([ { geometry, material } ]);