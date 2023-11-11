export async function getChats(): Promise<any> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return { message: 'terveterve' }
}
