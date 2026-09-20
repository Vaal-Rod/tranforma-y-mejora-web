import "./NetworkAnimation.css";

const nodes = [
  { x: 60, y: 70, r: 7, color: "var(--color-secondary-light)", delay: "0s" },
  { x: 180, y: 40, r: 5, color: "var(--color-white)", delay: "0.6s" },
  { x: 300, y: 90, r: 8, color: "var(--color-accent-light)", delay: "1.2s" },
  { x: 130, y: 150, r: 6, color: "var(--color-white)", delay: "0.3s" },
  { x: 260, y: 170, r: 5, color: "var(--color-secondary-light)", delay: "0.9s" },
  { x: 340, y: 200, r: 7, color: "var(--color-accent-light)", delay: "1.5s" },
  { x: 90, y: 220, r: 6, color: "var(--color-white)", delay: "0.4s" },
  { x: 200, y: 250, r: 8, color: "var(--color-secondary-light)", delay: "1.1s" },
];

const links = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
  [2, 4],
  [4, 5],
  [3, 6],
  [4, 7],
  [6, 7],
];

export default function NetworkAnimation({ label = "Visualización de datos (ilustrativa)" }) {
  return (
    <div className="network-anim" role="img" aria-label={label}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        {links.map(([a, b], i) => (
          <line
            key={`link-${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            className="network-anim__link"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
        {nodes.map((node, i) => (
          <circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.color}
            className="network-anim__node"
            style={{ animationDelay: node.delay }}
          />
        ))}
      </svg>
    </div>
  );
}
