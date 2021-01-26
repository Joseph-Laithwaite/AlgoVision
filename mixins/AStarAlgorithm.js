export default {
    methods:{
         async aStar(){
            if(!this.startPos || !this.endPos || this.startPos === this.endPos){
                return false;
            }
            if(this.univisitedPositions.length>0){
                this.univisitedPositions.sort((pos1,pos2) => pos2.totalDistance - pos1.totalDistance);
                let closestPos = this.univisitedPositions.pop();
                console.log('closestPos',closestPos);
                if(closestPos.distanceFromStart === Infinity) return false;
                if(closestPos.isWall === true) return false;
                closestPos.visited = true;
                if(closestPos === this.endPos) return true;
                this.updateUnivisitedAStarNeighbours(closestPos);
            }
            return null;
        },
        getCartesianDistance(fromPos, toPos = this.endPos){
            return Math.sqrt(Math.pow((fromPos.x-toPos.x),2)+Math.pow((fromPos.y-toPos.y),2));
        },
        updateUnivisitedAStarNeighbours(currPos){
            let {y, x} = currPos;
            if(y>0 && y<this.gridHeight+1 && !this.grid[y-1][x].visited && !this.grid[y-1][x].isWall) {
                this.grid[y-1][x].distanceFromStart = currPos.distanceFromStart +1;
                this.grid[y-1][x].totalDistance = this.grid[y-1][x].distanceFromStart + this.getCartesianDistance(this.grid[y-1][x]);
                this.grid[y-1][x].previousPos = currPos;
            }
            if(y>=0 && y<this.gridHeight && !this.grid[y+1][x].visited && !this.grid[y+1][x].isWall) {
                this.grid[y+1][x].distanceFromStart = currPos.distanceFromStart +1;
                this.grid[y+1][x].totalDistance = this.grid[y+1][x].distanceFromStart + this.getCartesianDistance(this.grid[y+1][x]);
                this.grid[y+1][x].previousPos = currPos;
            }
            if(x>0 && x<this.gridWidth+1  && !this.grid[y][x-1].visited && !this.grid[y][x-1].isWall) {
                this.grid[y][x-1].distanceFromStart = currPos.distanceFromStart +1;
                this.grid[y][x-1].totalDistance = this.grid[y][x-1].distanceFromStart + this.getCartesianDistance(this.grid[y][x-1]);
                this.grid[y][x-1].previousPos = currPos;
            }
            if(x>=0 && x<this.gridWidth && !this.grid[y][x+1].visited && !this.grid[y][x+1].isWall){
                this.grid[y][x+1].distanceFromStart = currPos.distanceFromStart +1;
                this.grid[y][x+1].totalDistance = this.grid[y][x+1].distanceFromStart + this.getCartesianDistance(this.grid[y][x+1]);
                this.grid[y][x+1].previousPos = currPos;
            }
        },
    },
}