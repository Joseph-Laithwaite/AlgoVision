import MinHeapMixin from "../mixins/MinHeapMixin.js";
export default {
    mixins:[MinHeapMixin],
    methods:{
        async stepDijkstra(){
            if(!this.inProgress){
                this.univisitedPositions = this.getAllPositions();
                this.inProgress=true;
            }
            let pass = await this.dijkstra();
            if(pass===true){
                await this.drawShortestRoute();
                this.inProgress = false;
                this.algoComplete = true;
            }else if(pass===false){
                this.inProgress = false;
                this.algoComplete = true;
            }
        },
        // getAllPositionsHeap(){
        //     let positions = [];
        //     positions.push(this.startPos);
        //     for (let row of this.grid){
        //         for (let pos of row){
        //             if(!pos.isStart)
        //                 positions.push(pos);
        //         }
        //     }
        //     return positions;
        // },
        async dijkstra(){
            if(!this.startPos || !this.endPos || this.startPos === this.endPos){
                return false;
            }
            if (this.univisitedPositions.length>0){
                this.univisitedPositions.sort((pos1,pos2) => pos2.distanceFromStart - pos1.distanceFromStart);
                let closestPos = this.univisitedPositions.pop();
                if(closestPos.distanceFromStart === Infinity) return false;
                if(closestPos.isWall === true) return false;
                closestPos.visited = true;
                if(closestPos === this.endPos) return true;
                this.updateUnivisitedDijkstraNeighbours(closestPos);
            }
            return null
        },
        updateUnivisitedDijkstraNeighbours(currPos){
            let {y, x} = currPos;
            if(y>0 && y<this.gridHeight+1 && !this.grid[y-1][x].visited && !this.grid[y-1][x].isWall) {
                this.grid[y-1][x].distanceFromStart = currPos.distanceFromStart +1;
                this.grid[y-1][x].previousPos = currPos;
            }
            if(y>=0 && y<this.gridHeight && !this.grid[y+1][x].visited && !this.grid[y+1][x].isWall) {
                this.grid[y+1][x].distanceFromStart = currPos.distanceFromStart +1;
                this.grid[y+1][x].previousPos = currPos;
            }
            if(x>0 && x<this.gridWidth+1  && !this.grid[y][x-1].visited && !this.grid[y][x-1].isWall) {
                this.grid[y][x-1].distanceFromStart = currPos.distanceFromStart +1;
                this.grid[y][x-1].previousPos = currPos;
            }
            if(x>=0 && x<this.gridWidth && !this.grid[y][x+1].visited && !this.grid[y][x+1].isWall){
                this.grid[y][x+1].distanceFromStart = currPos.distanceFromStart +1;
                this.grid[y][x+1].previousPos = currPos;
            }
        },

    },
}