// GLSL for the glass shell (fresnel rim) and the particle points.

export const fresnel = {
  vertex: /* glsl */ `
    varying vec3 vN; varying vec3 vV;
    void main(){
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vN = normalize(normalMatrix * normal);
      vV = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv;
    }`,
  fragment: /* glsl */ `
    varying vec3 vN; varying vec3 vV;
    void main(){
      float f = pow(1.0 - abs(dot(vN, vV)), 2.2);
      vec3 c = mix(vec3(.08,.08,.075), vec3(.93,.91,.88), f);
      gl_FragColor = vec4(c, .10 + f * .38);
    }`,
};

export const points = {
  vertex: /* glsl */ `
    attribute float size; attribute float alpha; attribute vec3 color;
    varying vec3 vC; varying float vA; uniform float uPR;
    void main(){
      vC = color; vA = alpha;
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = size * uPR * (64.0 / -mv.z);
      gl_Position = projectionMatrix * mv;
    }`,
  fragment: /* glsl */ `
    varying vec3 vC; varying float vA; uniform float uFade;
    void main(){
      vec2 d = gl_PointCoord - .5; float r = length(d);
      if (r > .5) discard;
      gl_FragColor = vec4(vC, smoothstep(.5, .0, r) * vA * uFade);
    }`,
};
