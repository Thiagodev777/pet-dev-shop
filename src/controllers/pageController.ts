import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            menu: '/all',
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    })
}
export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            menu: '/dogs',
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    })
}
export const cats = (req: Request, res: Response) => {
    res.render('pages/page',{
        banner: {
            menu: '/cats',
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    })
}
export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            menu: '/fishes',
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    })
}
