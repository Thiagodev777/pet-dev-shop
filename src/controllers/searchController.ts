import { Request, Response } from 'express';

import Pet from '../models/Pet';
import { createMenuObjetct } from '../helpers/createMenuObjetc';

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;
    let list = Pet.getFromName(query)
    if(!query){
        res.redirect('/')
        return
    }
    res.render('pages/pageSearch', {
        menu: createMenuObjetct(''),
        list
    })
}