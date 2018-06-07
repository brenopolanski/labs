import { Articles } from '.'

let articles

beforeEach(async () => {
  articles = await Articles.create({ title: 'test', content: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = articles.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(articles.id)
    expect(view.title).toBe(articles.title)
    expect(view.content).toBe(articles.content)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = articles.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(articles.id)
    expect(view.title).toBe(articles.title)
    expect(view.content).toBe(articles.content)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
