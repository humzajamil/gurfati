class Meals {
    constructor(
        id,
        CategoryIds,
        title,
        affordibility,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGultenFree,
        isVegan,
        isVegitarian,
        isLuctoseFree
        ){
        this.id=id;
        this.CategoryIds=CategoryIds;
        this.title=title;
        this.affordibility=affordibility;
        this.complexity=complexity;
        this.imageUrl=imageUrl;
        this.duration=duration;
        this.ingredients=ingredients;
        this.steps=steps;
        this.isGultenFree=isGultenFree;
        this.isVegan=isVegan;
        this.isVegitarian=isVegitarian;
        this.isLuctoseFree=isLuctoseFree;
    
    }
}
export default Meals;