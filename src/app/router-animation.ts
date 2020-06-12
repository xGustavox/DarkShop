import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    state
} from '@angular/animations'

export const slide = 
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                })
            ], {optional:true}),
            query(':enter', [
                style({ left: '100%'})
            ], {optional:true}),
            query(':leave', [
                style({ left: '0%'})
            ], {optional:true}),
            group([
                query(':leave', [
                    animate('500ms ease-out', style({ left: '-100%'}))
                ], {optional:true}),
                query(':enter', [
                    animate('500ms ease-out', style({ left: '0%'}))
                ], {optional:true})
            ])
        ])
    ])

export const fade = 
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                })
            ], {optional:true}),
            query(':enter', [
                style({
                    opacity: 0
                })
            ], {optional:true}),
            query(':leave', [
                style({
                    opacity: 1
                })
            ], {optional:true}),
            group([
                query(':leave', [
                    animate('400ms ease', style({opacity: 0}))
                ], {optional:true}),
                query(':enter', [
                    animate('400ms ease', style({opacity: 1}))
                ], {optional:true})
            ])
        ])
    ])