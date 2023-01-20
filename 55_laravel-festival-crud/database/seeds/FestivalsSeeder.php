<?php

use Illuminate\Database\Seeder;

use App\Models\Festival;

class FestivalsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $festivals = config('festivals');
        foreach ($festivals as $festival){
            $new_festival = new Festival();
            $new_festival->fill($festival);
            $new_festival->save();
        }
    }
}
