import React, {Component} from 'react';
import {getUserData, addFavoritesToUser} from "./db/firebase";
import cache from "./userCache"

export function addFavorite (bizid) {

    getUserData(cache.user_id).then(u_object => {
        if (u_object != undefined) {
            let favorites = [];
            favorites = u_object.favorites;
            favorites.push(bizid);
            addFavoritesToUser(cache.user_id, favorites);
        }
    })

}

export function removeFavorite(bizid) {

    getUserData(cache.user_id).then(u_object => {
        if (u_object != undefined) {
            let favorites = [];
            favorites = u_object.favorites;

            for (var i = favorites.length - 1; i >= 0; i--) {
                if (favorites[i] === bizid) {
                    favorites.splice(i, 1);
                }
            }

            addFavoritesToUser(cache.user_id, favorites);
        }
    })
}