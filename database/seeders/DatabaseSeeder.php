<?php

namespace Database\Seeders;

use App\Models\Rule;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $rules = [
            "Супер-пользователь",
            "Администратор",
            "Оператор"
        ];
        foreach ($rules as $rule) {
            Rule::create([
                'name' => $rule,
            ]);
        }

        User::create([
            'login' => '4500',
            'name' => 'Николай',
            'last_name' => 'Сироткин',
            'rule_id' => 1,
            'password' => Hash::make('Komax1230'),
        ]);
    }
}
