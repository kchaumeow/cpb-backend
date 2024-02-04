export type ProductDTO = {
  products: {
    edges: [
      {
        node: {
          id: string;
          bodyHtml: string;
          images: { nodes: { src: string } };
        };
      }
    ];
  };
};
