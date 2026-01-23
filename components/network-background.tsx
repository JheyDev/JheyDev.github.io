"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Pulse {
  startNode: number;
  endNode: number;
  progress: number;
  speed: number;
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      const nodeCount = 25;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const getConnections = (): [number, number][] => {
      const connections: [number, number][] = [];
      const maxDistance = 200;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            connections.push([i, j]);
          }
        }
      }
      return connections;
    };

    const addPulse = (connections: [number, number][]) => {
      if (connections.length === 0) return;
      if (Math.random() > 0.02) return;

      const [start, end] =
        connections[Math.floor(Math.random() * connections.length)];
      pulses.push({
        startNode: start,
        endNode: end,
        progress: 0,
        speed: 0.01 + Math.random() * 0.02,
      });
    };

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      });

      const connections = getConnections();

      // Draw connections
      connections.forEach(([i, j]) => {
        const nodeA = nodes[i];
        const nodeB = nodes[j];
        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const opacity = 1 - distance / 200;

        ctx.beginPath();
        ctx.moveTo(nodeA.x, nodeA.y);
        ctx.lineTo(nodeB.x, nodeB.y);
        ctx.strokeStyle = `rgba(188, 19, 254, ${opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(188, 19, 254, 0.6)";
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          6
        );
        gradient.addColorStop(0, "rgba(188, 19, 254, 0.4)");
        gradient.addColorStop(1, "rgba(188, 19, 254, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Add new pulses
      addPulse(connections);

      // Update and draw pulses
      pulses = pulses.filter((pulse) => {
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) return false;

        const startNode = nodes[pulse.startNode];
        const endNode = nodes[pulse.endNode];

        const x = startNode.x + (endNode.x - startNode.x) * pulse.progress;
        const y = startNode.y + (endNode.y - startNode.y) * pulse.progress;

        // Draw pulse glow
        const pulseGradient = ctx.createRadialGradient(x, y, 0, x, y, 15);
        pulseGradient.addColorStop(0, "rgba(188, 19, 254, 1)");
        pulseGradient.addColorStop(0.3, "rgba(255, 0, 255, 0.6)");
        pulseGradient.addColorStop(1, "rgba(188, 19, 254, 0)");

        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fillStyle = pulseGradient;
        ctx.fill();

        // Draw pulse core
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        return true;
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }}
    />
  );
}
