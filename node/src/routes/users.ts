import { Router, Request, Response } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
    res.send(`POST Working`);
});

router.get('/', (req: Request, res: Response) => {
    res.send('GET Working');
});

router.get('/:id', (req: Request, res: Response) => {
    res.send(`PUT Working`);
});

router.put('/:id', (req: Request, res: Response) => {
    res.send(`PUT Working`);
});

router.patch('/:id', (req: Request, res: Response) => {
    res.send(`PATCH Working`);
});

router.delete('/:id', (req: Request, res: Response) => {
    res.send(`DELETE Working`);
});

export default router;