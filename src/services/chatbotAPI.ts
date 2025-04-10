export async function getBotResponse(message: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Você disse: ${message}`);
    }, 500);
  });
}
